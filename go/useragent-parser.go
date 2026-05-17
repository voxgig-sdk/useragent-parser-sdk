package voxgiguseragentparsersdk

import (
	"github.com/voxgig-sdk/useragent-parser-sdk/go/core"
	"github.com/voxgig-sdk/useragent-parser-sdk/go/entity"
	"github.com/voxgig-sdk/useragent-parser-sdk/go/feature"
	_ "github.com/voxgig-sdk/useragent-parser-sdk/go/utility"
)

// Type aliases preserve external API.
type UseragentParserSDK = core.UseragentParserSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UseragentParserEntity = core.UseragentParserEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UseragentParserError = core.UseragentParserError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewParseEntityFunc = func(client *core.UseragentParserSDK, entopts map[string]any) core.UseragentParserEntity {
		return entity.NewParseEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUseragentParserSDK = core.NewUseragentParserSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
