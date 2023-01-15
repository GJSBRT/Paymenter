<?php
namespace App\Http\Controllers\API\Website;

use App\Http\Controllers\Controller;

class ThemeController extends Controller
{
    /**
     * Get logo
     */
    public function getLogo() {
        if (config('settings::app_logo')) {
            return response()->json([
                'logo' => asset(config('settings::app_logo'))
            ], 200);
        }

        return response()->json([
            'logo' => URL('/img/logo.png')
        ], 200);
    }
}