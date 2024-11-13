<?php
namespace App\Services;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;

class CommentService
{public function create(array $data,$id)
    {
        $author = Auth::user()->name;
        return Comment::create([
            'post_id' => $id,
            'author' => $author,
            'content' => $data['body'],
        ]);
    }

    public function getPostById($postId)
    {
        return comment::with('post')->where('post_id',$postId)->get() ;
    }
}

