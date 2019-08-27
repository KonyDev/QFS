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
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIViewAnimatingStateInactive"] = @0;
	context[@"UIViewAnimatingStateActive"] = @1;
	context[@"UIViewAnimatingStateStopped"] = @2;

	context[@"UIViewAnimatingPositionEnd"] = @0;
	context[@"UIViewAnimatingPositionStart"] = @1;
	context[@"UIViewAnimatingPositionCurrent"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIViewAnimatingProtocols()
{
	(void)@protocol(UIViewAnimating);
	(void)@protocol(UIViewImplicitlyAnimating);
}
void load_UIKit_UIViewAnimating_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
