if (strcmp(type, @encode(CATransform3D)) == 0) {
		CATransform3D returnValue = value.toCATransform3D;
		[invocation setReturnValue: &returnValue];
	}