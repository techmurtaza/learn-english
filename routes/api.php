<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// The following routes are protected by a throttle middleware, which limits the number of requests
// that can be made to these endpoints. The 'throttle:60,1' setting allows a maximum of 60 requests
// per minute from a single IP address. This helps prevent abuse and ensures fair usage of the API.

// Since the requests are coming from a React frontend on the same domain, CSRF protection is handled
// by including a CSRF token in the request headers. Laravel automatically checks for this token
// to ensure that the request is legitimate. The token is typically included in the headers by
// setting it in the axios default headers, as seen in the Questions.js component.

Route::middleware('throttle:60,1')->group(function () {
    Route::get('/words', 'App\Http\Controllers\WordController@index');
    Route::get('/words/questions/{wordsCount}', 'App\Http\Controllers\WordController@createWordsQuestions');
});

