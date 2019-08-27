if (strcmp(type, @encode(CGAffineTransform)) == 0) {
		CGAffineTransform returnValue = value.toCGAffineTransform;
		[invocation setReturnValue: &returnValue];
	}