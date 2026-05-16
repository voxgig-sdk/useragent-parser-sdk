<?php
declare(strict_types=1);

// UseragentParser SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

UseragentParserUtility::setRegistrar(function (UseragentParserUtility $u): void {
    $u->clean = [UseragentParserClean::class, 'call'];
    $u->done = [UseragentParserDone::class, 'call'];
    $u->make_error = [UseragentParserMakeError::class, 'call'];
    $u->feature_add = [UseragentParserFeatureAdd::class, 'call'];
    $u->feature_hook = [UseragentParserFeatureHook::class, 'call'];
    $u->feature_init = [UseragentParserFeatureInit::class, 'call'];
    $u->fetcher = [UseragentParserFetcher::class, 'call'];
    $u->make_fetch_def = [UseragentParserMakeFetchDef::class, 'call'];
    $u->make_context = [UseragentParserMakeContext::class, 'call'];
    $u->make_options = [UseragentParserMakeOptions::class, 'call'];
    $u->make_request = [UseragentParserMakeRequest::class, 'call'];
    $u->make_response = [UseragentParserMakeResponse::class, 'call'];
    $u->make_result = [UseragentParserMakeResult::class, 'call'];
    $u->make_point = [UseragentParserMakePoint::class, 'call'];
    $u->make_spec = [UseragentParserMakeSpec::class, 'call'];
    $u->make_url = [UseragentParserMakeUrl::class, 'call'];
    $u->param = [UseragentParserParam::class, 'call'];
    $u->prepare_auth = [UseragentParserPrepareAuth::class, 'call'];
    $u->prepare_body = [UseragentParserPrepareBody::class, 'call'];
    $u->prepare_headers = [UseragentParserPrepareHeaders::class, 'call'];
    $u->prepare_method = [UseragentParserPrepareMethod::class, 'call'];
    $u->prepare_params = [UseragentParserPrepareParams::class, 'call'];
    $u->prepare_path = [UseragentParserPreparePath::class, 'call'];
    $u->prepare_query = [UseragentParserPrepareQuery::class, 'call'];
    $u->result_basic = [UseragentParserResultBasic::class, 'call'];
    $u->result_body = [UseragentParserResultBody::class, 'call'];
    $u->result_headers = [UseragentParserResultHeaders::class, 'call'];
    $u->transform_request = [UseragentParserTransformRequest::class, 'call'];
    $u->transform_response = [UseragentParserTransformResponse::class, 'call'];
});
