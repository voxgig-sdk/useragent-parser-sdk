# UseragentParser SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UseragentParserUtility.registrar = ->(u) {
  u.clean = UseragentParserUtilities::Clean
  u.done = UseragentParserUtilities::Done
  u.make_error = UseragentParserUtilities::MakeError
  u.feature_add = UseragentParserUtilities::FeatureAdd
  u.feature_hook = UseragentParserUtilities::FeatureHook
  u.feature_init = UseragentParserUtilities::FeatureInit
  u.fetcher = UseragentParserUtilities::Fetcher
  u.make_fetch_def = UseragentParserUtilities::MakeFetchDef
  u.make_context = UseragentParserUtilities::MakeContext
  u.make_options = UseragentParserUtilities::MakeOptions
  u.make_request = UseragentParserUtilities::MakeRequest
  u.make_response = UseragentParserUtilities::MakeResponse
  u.make_result = UseragentParserUtilities::MakeResult
  u.make_point = UseragentParserUtilities::MakePoint
  u.make_spec = UseragentParserUtilities::MakeSpec
  u.make_url = UseragentParserUtilities::MakeUrl
  u.param = UseragentParserUtilities::Param
  u.prepare_auth = UseragentParserUtilities::PrepareAuth
  u.prepare_body = UseragentParserUtilities::PrepareBody
  u.prepare_headers = UseragentParserUtilities::PrepareHeaders
  u.prepare_method = UseragentParserUtilities::PrepareMethod
  u.prepare_params = UseragentParserUtilities::PrepareParams
  u.prepare_path = UseragentParserUtilities::PreparePath
  u.prepare_query = UseragentParserUtilities::PrepareQuery
  u.result_basic = UseragentParserUtilities::ResultBasic
  u.result_body = UseragentParserUtilities::ResultBody
  u.result_headers = UseragentParserUtilities::ResultHeaders
  u.transform_request = UseragentParserUtilities::TransformRequest
  u.transform_response = UseragentParserUtilities::TransformResponse
}
