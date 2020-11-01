<?php

use Illuminate\Database\Seeder;

class ArticlesTableTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            'title' => 'Sample Title',
            'content' => '# This is a header\n\n## This is a second header\n\nAnd this is a paragraph',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
