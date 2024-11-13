<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
                'title' => 'required|string|max:255',
                'body' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

            ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'The post title is required.',
            'title.max' => 'The post title must not exceed 255 characters.',
            'body.required' => 'The post content is required.',
            'image.image' => 'The file must be an image.',
            'image.mimes' => 'The image must be a type of: jpeg, png, jpg, gif, or svg.',
            'image.max' => 'The image size must not exceed 2MB.',
        ];
    }
}
