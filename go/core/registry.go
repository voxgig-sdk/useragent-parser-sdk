package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewParseEntityFunc func(client *UseragentParserSDK, entopts map[string]any) UseragentParserEntity

