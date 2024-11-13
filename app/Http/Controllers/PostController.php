<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\PostService;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    protected $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    public function index()
    {
        $posts = $this->postService->getAllPosts();
        return Inertia::render('Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    public function store(StorePostRequest $request)
    {
        $this->postService->createPost($request->validated());
        return redirect()->route('posts.index');
    }

    public function show()
    {
        $post = $this->postService->getUserPosts();
        return Inertia::render('Posts/Show', [
            'posts' => $post
        ]);
    }

    public function edit($id)
    {
        $post = $this->postService->getPostById($id);
        return Inertia::render('Posts/Edit', [
            'post' => $post
        ]);
    }

    public function update(UpdatePostRequest $request, $id)
    {
        $this->postService->updatePost($id, $request->validated());
        return redirect()->route('posts.index');
    }

    public function destroy($id)
    {
        $this->postService->deletePost($id);
        return redirect()->route('posts.index');
    }
}
