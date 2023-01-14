<?php

namespace App\Classes;

use App\Models\Settings;

class Routing {

    /* 
    * Returns true if current theme wants to use Laravel's routing
    */
    public static function useLaravelRouting() {
        $themeName = Settings::where('key', 'theme')->first()->value ?? 'default';
        $themeData = file_get_contents(base_path() . "/themes/{$themeName}/theme.json");
        $themeConfig = json_decode($themeData, true);

        return $themeConfig['useLaravelRouting'] ?? true;
    }
}
