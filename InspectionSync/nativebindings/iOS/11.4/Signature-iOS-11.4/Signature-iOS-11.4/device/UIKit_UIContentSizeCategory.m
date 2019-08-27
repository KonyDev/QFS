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
}
static void registerCFunctions(JSContext* context)
{
	context[@"UIContentSizeCategoryIsAccessibilityCategory"] = ^BOOL(UIContentSizeCategory arg0) {
		return UIContentSizeCategoryIsAccessibilityCategory(arg0);
	};
	context[@"UIContentSizeCategoryCompareToCategory"] = ^NSComparisonResult(UIContentSizeCategory arg0, UIContentSizeCategory arg1) {
		return UIContentSizeCategoryCompareToCategory(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIContentSizeCategoryAccessibilityMedium;
	if (p != NULL) context[@"UIContentSizeCategoryAccessibilityMedium"] = UIContentSizeCategoryAccessibilityMedium;
	p = (void*) &UIContentSizeCategoryAccessibilityExtraExtraExtraLarge;
	if (p != NULL) context[@"UIContentSizeCategoryAccessibilityExtraExtraExtraLarge"] = UIContentSizeCategoryAccessibilityExtraExtraExtraLarge;
	p = (void*) &UIContentSizeCategoryExtraExtraLarge;
	if (p != NULL) context[@"UIContentSizeCategoryExtraExtraLarge"] = UIContentSizeCategoryExtraExtraLarge;
	p = (void*) &UIContentSizeCategoryExtraLarge;
	if (p != NULL) context[@"UIContentSizeCategoryExtraLarge"] = UIContentSizeCategoryExtraLarge;
	p = (void*) &UIContentSizeCategoryLarge;
	if (p != NULL) context[@"UIContentSizeCategoryLarge"] = UIContentSizeCategoryLarge;
	p = (void*) &UIContentSizeCategoryAccessibilityLarge;
	if (p != NULL) context[@"UIContentSizeCategoryAccessibilityLarge"] = UIContentSizeCategoryAccessibilityLarge;
	p = (void*) &UIContentSizeCategoryMedium;
	if (p != NULL) context[@"UIContentSizeCategoryMedium"] = UIContentSizeCategoryMedium;
	p = (void*) &UIContentSizeCategoryNewValueKey;
	if (p != NULL) context[@"UIContentSizeCategoryNewValueKey"] = UIContentSizeCategoryNewValueKey;
	p = (void*) &UIContentSizeCategoryAccessibilityExtraLarge;
	if (p != NULL) context[@"UIContentSizeCategoryAccessibilityExtraLarge"] = UIContentSizeCategoryAccessibilityExtraLarge;
	p = (void*) &UIContentSizeCategoryExtraExtraExtraLarge;
	if (p != NULL) context[@"UIContentSizeCategoryExtraExtraExtraLarge"] = UIContentSizeCategoryExtraExtraExtraLarge;
	p = (void*) &UIContentSizeCategoryDidChangeNotification;
	if (p != NULL) context[@"UIContentSizeCategoryDidChangeNotification"] = UIContentSizeCategoryDidChangeNotification;
	p = (void*) &UIContentSizeCategoryAccessibilityExtraExtraLarge;
	if (p != NULL) context[@"UIContentSizeCategoryAccessibilityExtraExtraLarge"] = UIContentSizeCategoryAccessibilityExtraExtraLarge;
	p = (void*) &UIContentSizeCategoryUnspecified;
	if (p != NULL) context[@"UIContentSizeCategoryUnspecified"] = UIContentSizeCategoryUnspecified;
	p = (void*) &UIContentSizeCategoryExtraSmall;
	if (p != NULL) context[@"UIContentSizeCategoryExtraSmall"] = UIContentSizeCategoryExtraSmall;
	p = (void*) &UIContentSizeCategorySmall;
	if (p != NULL) context[@"UIContentSizeCategorySmall"] = UIContentSizeCategorySmall;
}
void load_UIKit_UIContentSizeCategory_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
