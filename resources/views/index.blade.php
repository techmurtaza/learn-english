<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{env("APP_NAME")}}</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>

    <body>
        <div class="flex flex-col min-h-screen">
            <header>
                <!-- Header content -->
            </header>
            <main class="flex-grow" id="root">
                <!-- Main content -->
            </main>

            <!-- Your footer -->
            <footer class="bg-gray-800 text-white">
                <div class="container mx-auto p-4">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="text-center md:text-left mb-4 md:mb-0">
                            <p>© {{ date('Y') }} - {{ env("APP_NAME") }} by <a href="https://murtafiji.com/" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Murtaza</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </body>
</html>
