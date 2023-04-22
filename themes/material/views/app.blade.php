<?php

use Illuminate\Support\Facades\Auth;

$themeData = [
    'logo' => config('settings::app_logo') ? asset(config('settings::app_logo')) : URL('/img/logo.png'),
    'name' => config('settings::app_name') ?? 'Paymenter',
    'user' => Auth::user()->toArray() ?? null,
];

?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Paymenter') }}</title>

        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        @vite(['themes/material/css/app.css', 'themes/material/js/app.jsx'])
        <script>
            window.ThemeData = {!! json_encode($themeData) !!};
        </script>
    </head>
    <body class="font-sans antialiased">
        <div id="root"></div>
    </body>
</html>
