<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'is_purchased',
        'purchased_by',
        'created_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    /**
     * Get the user that owns the item.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'purchased_by');
    }

    /**
     * Get the user that owns the item.
     */
    public function userCreated()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
