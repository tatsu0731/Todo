<?php

use Illuminate\Http\Request;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('tasks/index', [TaskController::class, 'index']);
Route::post('tasks/index', [TaskController::class, 'store']);
Route::delete('tasks/index/{id}', [TaskController::class, 'destroy']);
Route::patch('tasks/index/{id}', [TaskController::class, 'update']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
