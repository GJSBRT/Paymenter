<?php

namespace App\Classes;

use App\Models\Setting;

class Routing {

    /* 
    * Returns true if current theme wants to use Laravel's routing
    */
    public static function useLaravelRouting() {
        $themeName = Setting::where('key', 'theme')->first()->value ?? 'default';
        
        try {
            $themeData = file_get_contents(base_path() . "/themes/{$themeName}/theme.json");
            $themeConfig = json_decode($themeData, true);
        } catch (\Exception $e) {
            return true;
        }

        return $themeConfig['laravelRouting'] ?? true;
    }
}
