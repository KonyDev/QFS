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
	context[@"UIGuidedAccessRestrictionStateForIdentifier"] = ^UIGuidedAccessRestrictionState(NSString * arg0) {
		return UIGuidedAccessRestrictionStateForIdentifier(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIGuidedAccessRestrictionStateAllow"] = @0;
	context[@"UIGuidedAccessRestrictionStateDeny"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIGuidedAccessRestrictionsProtocols()
{
	(void)@protocol(UIGuidedAccessRestrictionDelegate);
}
void load_UIKit_UIGuidedAccessRestrictions_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
