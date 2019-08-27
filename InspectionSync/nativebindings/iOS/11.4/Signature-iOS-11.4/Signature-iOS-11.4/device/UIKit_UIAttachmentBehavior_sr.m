if (strcmp(type, @encode(UIFloatRange)) == 0) {
		UIFloatRange returnValue = value.toUIFloatRange;
		[invocation setReturnValue: &returnValue];
	}