<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\CommentService;
use App\Http\Requests\CommentRequest;

class CommentController extends Controller
{
    protected $commentService;
    public function __construct(CommentService $commentService){
        $this->commentService = $commentService;
    }
    public function show($id){
        $coments = $this->commentService->getPostById($id);
        return Inertia::render('Posts/DisplayComments', [
            'coments' => $coments,
            'id' => $id
        ]);
    }

    public function store(CommentRequest $request, $id)
    {

        $this->commentService->create($request->validated(),$id);

        return redirect()->route('posts.index');
    }
}
