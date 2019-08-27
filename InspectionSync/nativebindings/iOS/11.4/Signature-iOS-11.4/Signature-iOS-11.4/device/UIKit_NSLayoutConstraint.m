#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([NSLayoutConstraint class], @protocol(NSLayoutConstraintInstanceExports));
	class_addProtocol([NSLayoutConstraint class], @protocol(NSLayoutConstraintClassExports));
	class_addProtocol([NSLayoutConstraint class], @protocol(NSLayoutConstraintNSIdentifierCategoryInstanceExports));
	class_addProtocol([NSLayoutConstraint class], @protocol(NSLayoutConstraintNSIdentifierCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"NSLayoutRelationLessThanOrEqual"] = @-1;
	context[@"NSLayoutRelationEqual"] = @0;
	context[@"NSLayoutRelationGreaterThanOrEqual"] = @1;

	context[@"NSLayoutAttributeLeft"] = @1;
	context[@"NSLayoutAttributeRight"] = @2;
	context[@"NSLayoutAttributeTop"] = @3;
	context[@"NSLayoutAttributeBottom"] = @4;
	context[@"NSLayoutAttributeLeading"] = @5;
	context[@"NSLayoutAttributeTrailing"] = @6;
	context[@"NSLayoutAttributeWidth"] = @7;
	context[@"NSLayoutAttributeHeight"] = @8;
	context[@"NSLayoutAttributeCenterX"] = @9;
	context[@"NSLayoutAttributeCenterY"] = @10;
	context[@"NSLayoutAttributeLastBaseline"] = @11;
	context[@"NSLayoutAttributeBaseline"] = @11;
	context[@"NSLayoutAttributeFirstBaseline"] = @12;
	context[@"NSLayoutAttributeLeftMargin"] = @13;
	context[@"NSLayoutAttributeRightMargin"] = @14;
	context[@"NSLayoutAttributeTopMargin"] = @15;
	context[@"NSLayoutAttributeBottomMargin"] = @16;
	context[@"NSLayoutAttributeLeadingMargin"] = @17;
	context[@"NSLayoutAttributeTrailingMargin"] = @18;
	context[@"NSLayoutAttributeCenterXWithinMargins"] = @19;
	context[@"NSLayoutAttributeCenterYWithinMargins"] = @20;
	context[@"NSLayoutAttributeNotAnAttribute"] = @0;

	context[@"NSLayoutFormatAlignAllLeft"] = @2U;
	context[@"NSLayoutFormatAlignAllRight"] = @4U;
	context[@"NSLayoutFormatAlignAllTop"] = @8U;
	context[@"NSLayoutFormatAlignAllBottom"] = @16U;
	context[@"NSLayoutFormatAlignAllLeading"] = @32U;
	context[@"NSLayoutFormatAlignAllTrailing"] = @64U;
	context[@"NSLayoutFormatAlignAllCenterX"] = @512U;
	context[@"NSLayoutFormatAlignAllCenterY"] = @1024U;
	context[@"NSLayoutFormatAlignAllLastBaseline"] = @2048U;
	context[@"NSLayoutFormatAlignAllBaseline"] = @2048U;
	context[@"NSLayoutFormatAlignAllFirstBaseline"] = @4096U;
	context[@"NSLayoutFormatAlignmentMask"] = @65535U;
	context[@"NSLayoutFormatDirectionLeadingToTrailing"] = @0U;
	context[@"NSLayoutFormatDirectionLeftToRight"] = @65536U;
	context[@"NSLayoutFormatDirectionRightToLeft"] = @131072U;
	context[@"NSLayoutFormatDirectionMask"] = @196608U;
	context[@"NSLayoutFormatSpacingEdgeToEdge"] = @0U;
	context[@"NSLayoutFormatSpacingBaselineToBaseline"] = @524288U;
	context[@"NSLayoutFormatSpacingMask"] = @524288U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UILayoutPriorityDefaultLow;
	if (p != NULL) context[@"UILayoutPriorityDefaultLow"] = @(UILayoutPriorityDefaultLow);
	p = (void*) &UILayoutPriorityDefaultHigh;
	if (p != NULL) context[@"UILayoutPriorityDefaultHigh"] = @(UILayoutPriorityDefaultHigh);
	p = (void*) &UILayoutPriorityFittingSizeLevel;
	if (p != NULL) context[@"UILayoutPriorityFittingSizeLevel"] = @(UILayoutPriorityFittingSizeLevel);
	p = (void*) &UILayoutPriorityRequired;
	if (p != NULL) context[@"UILayoutPriorityRequired"] = @(UILayoutPriorityRequired);
}
void UIKit_NSLayoutConstraintProtocols()
{
	(void)@protocol(UILayoutSupport);
}
void load_UIKit_NSLayoutConstraint_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
