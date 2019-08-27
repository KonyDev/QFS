if (strcmp(type, @encode(CVPlanarPixelBufferInfo_YCbCrPlanar)) == 0) {
		CVPlanarPixelBufferInfo_YCbCrPlanar returnValue = value.toCVPlanarPixelBufferInfo_YCbCrPlanar;
		[invocation setReturnValue: &returnValue];
	} else if (strcmp(type, @encode(CVPlanarPixelBufferInfo_YCbCrBiPlanar)) == 0) {
		CVPlanarPixelBufferInfo_YCbCrBiPlanar returnValue = value.toCVPlanarPixelBufferInfo_YCbCrBiPlanar;
		[invocation setReturnValue: &returnValue];
	} else if (strcmp(type, @encode(CVPlanarComponentInfo)) == 0) {
		CVPlanarComponentInfo returnValue = value.toCVPlanarComponentInfo;
		[invocation setReturnValue: &returnValue];
	}