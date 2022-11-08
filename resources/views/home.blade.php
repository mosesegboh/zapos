@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" d-flex justify-content-between">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body" >
                    <div id="app">
                        <item/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection
