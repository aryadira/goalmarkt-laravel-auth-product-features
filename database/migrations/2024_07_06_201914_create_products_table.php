<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('no_resi')->nullable(false);
            $table->string('product_name')->nullable(false);
            $table->decimal('selling_price')->nullable(false);
            $table->text('description')->nullable();
            $table->enum('product_condition', ['brand_new_with_tags', 'mint', 'excellent', 'very_good', 'good', 'fair'])->default(null)->nullable(false);
            $table->enum('product_size', ['XS', 'S', 'M', 'L', 'XL', 'XXL'])->default(null)->nullable(false);
            $table->enum('status', ['pending', 'verified', 'rejected'])->default('pending');
            $table->date('expiry_date')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->on('users')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
