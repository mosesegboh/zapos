<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
            return [
                'id' => $this->id,
                'name' => $this->name,
                'is_purchased' => $this->is_purchased,
                'purchased_by' => $this->user,
                'created_by' =>  $this->userCreated,
            ];
    }
}
