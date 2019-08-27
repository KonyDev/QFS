if (strcmp(type, @encode(CVPlanarPixelBufferInfo_YCbCrPlanar)) == 0) {
		CVPlanarPixelBufferInfo_YCbCrPlanar argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCVPlanarPixelBufferInfo_YCbCrPlanar: argument inContext: context];
	} else if (strcmp(type, @encode(CVPlanarPixelBufferInfo_YCbCrBiPlanar)) == 0) {
		CVPlanarPixelBufferInfo_YCbCrBiPlanar argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCVPlanarPixelBufferInfo_YCbCrBiPlanar: argument inContext: context];
	} else if (strcmp(type, @encode(CVPlanarComponentInfo)) == 0) {
		CVPlanarComponentInfo argument;
		[invocation getArgument: &argument atIndex: index];
		return [JSValue valueWithCVPlanarComponentInfo: argument inContext: context];
	}