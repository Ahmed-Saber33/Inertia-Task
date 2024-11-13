<?php

namespace App\Services;

use App\Models\Post;
use App\Http\Traits\ImagesTrait;
use Illuminate\Support\Facades\Auth;

class PostService
{
    use ImagesTrait;
    public function getAllPosts()
    {
        return Post::with('user')->orderBy('created_at', 'desc')->get();
    }

    public function createPost(array $data)
    {
        $id = Auth::user()->id;
        $filename = time() . '.' . $data['image']->getClientOriginalExtension();
        $this->uploadimg($data['image'], $filename, 'posts');
        return Post::create([
            'title' => $data['title'],
            'content' => $data['body'],
            'image' => $filename,
            'user_id' => $id,
        ]);
    }

    public function getUserPosts()
    {
        $userId = Auth::user()->id;

        return  Post::where('user_id', $userId)->orderBy('created_at', 'desc')->get();

    }
    public function getPostById($id)
    {
        return Post::findOrFail($id);
    }

    public function updatePost($id,  $data)
    {
        $user_id = Auth::user()->id;
        $oldpost = $this->getPostById($id);

        if (isset($data['image']) && $data['image'] instanceof \Illuminate\Http\UploadedFile) {
            $image = $data['image'];
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $this->uploadimg($image, $filename, "posts", $oldpost->image);
        } else {
            // If the image is not an uploaded file, assume it is a string
            $filename = str_replace("images/posts/", '', $oldpost->image);
        }

        $post = Post::findOrFail($id);
        $post->update([
            'title' => $data['title'],
            'content' => $data['body'],
            'image' => $filename,
            'user_id' => $user_id,
        ]);
        return $post;
    }

    public function deletePost($id)
    {
        $post = Post::findOrFail($id);
        unlink(public_path($post->image));
        $post->delete();
        return $post;
    }

    public function search( $query)
    {
        $posts = Post::where('title', 'LIKE', "%{$query}%")
            ->orWhere('content', 'LIKE', "%{$query}%")
            ->get();
        return $posts;
    }
}
