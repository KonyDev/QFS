if (strcmp(type, @encode(UIEdgeInsets)) == 0) {
		UIEdgeInsets returnValue = value.toUIEdgeInsets;
		[invocation setReturnValue: &returnValue];
	} else if (strcmp(type, @encode(UIOffset)) == 0) {
		UIOffset returnValue = value.toUIOffset;
		[invocation setReturnValue: &returnValue];
	} else if (strcmp(type, @encode(NSDirectionalEdgeInsets)) == 0) {
		NSDirectionalEdgeInsets returnValue = value.toNSDirectionalEdgeInsets;
		[invocation setReturnValue: &returnValue];
	}