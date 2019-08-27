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
	context[@"NSLayoutRelationLessThanOrEqual"] = @-1L;
	context[@"NSLayoutRelationEqual"] = @0L;
	context[@"NSLayoutRelationGreaterThanOrEqual"] = @1L;

	context[@"NSLayoutAttributeLeft"] = @1L;
	context[@"NSLayoutAttributeRight"] = @2L;
	context[@"NSLayoutAttributeTop"] = @3L;
	context[@"NSLayoutAttributeBottom"] = @4L;
	context[@"NSLayoutAttributeLeading"] = @5L;
	context[@"NSLayoutAttributeTrailing"] = @6L;
	context[@"NSLayoutAttributeWidth"] = @7L;
	context[@"NSLayoutAttributeHeight"] = @8L;
	context[@"NSLayoutAttributeCenterX"] = @9L;
	context[@"NSLayoutAttributeCenterY"] = @10L;
	context[@"NSLayoutAttributeLastBaseline"] = @11L;
	context[@"NSLayoutAttributeBaseline"] = @11L;
	context[@"NSLayoutAttributeFirstBaseline"] = @12L;
	context[@"NSLayoutAttributeLeftMargin"] = @13L;
	context[@"NSLayoutAttributeRightMargin"] = @14L;
	context[@"NSLayoutAttributeTopMargin"] = @15L;
	context[@"NSLayoutAttributeBottomMargin"] = @16L;
	context[@"NSLayoutAttributeLeadingMargin"] = @17L;
	context[@"NSLayoutAttributeTrailingMargin"] = @18L;
	context[@"NSLayoutAttributeCenterXWithinMargins"] = @19L;
	context[@"NSLayoutAttributeCenterYWithinMargins"] = @20L;
	context[@"NSLayoutAttributeNotAnAttribute"] = @0L;

	context[@"NSLayoutFormatAlignAllLeft"] = @2UL;
	context[@"NSLayoutFormatAlignAllRight"] = @4UL;
	context[@"NSLayoutFormatAlignAllTop"] = @8UL;
	context[@"NSLayoutFormatAlignAllBottom"] = @16UL;
	context[@"NSLayoutFormatAlignAllLeading"] = @32UL;
	context[@"NSLayoutFormatAlignAllTrailing"] = @64UL;
	context[@"NSLayoutFormatAlignAllCenterX"] = @512UL;
	context[@"NSLayoutFormatAlignAllCenterY"] = @1024UL;
	context[@"NSLayoutFormatAlignAllLastBaseline"] = @2048UL;
	context[@"NSLayoutFormatAlignAllBaseline"] = @2048UL;
	context[@"NSLayoutFormatAlignAllFirstBaseline"] = @4096UL;
	context[@"NSLayoutFormatAlignmentMask"] = @65535UL;
	context[@"NSLayoutFormatDirectionLeadingToTrailing"] = @0UL;
	context[@"NSLayoutFormatDirectionLeftToRight"] = @65536UL;
	context[@"NSLayoutFormatDirectionRightToLeft"] = @131072UL;
	context[@"NSLayoutFormatDirectionMask"] = @196608UL;
	context[@"NSLayoutFormatSpacingEdgeToEdge"] = @0UL;
	context[@"NSLayoutFormatSpacingBaselineToBaseline"] = @524288UL;
	context[@"NSLayoutFormatSpacingMask"] = @524288UL;

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
