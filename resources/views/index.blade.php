<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" href="https://flfenglishclasses.com/assets/logo/favicon.ico">
        <meta name="robots" content="index, follow">
        <title>{{env("APP_NAME")}}</title>
        
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
         
        <?php /** 
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>
        */?>
    </head>

    <body>
            <main class="flex flex-col min-h-screen" id="root">
                <!-- Main content -->
            </main>
    </body>
</html>
