# UseragentParser SDK utility: feature_add
module UseragentParserUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
