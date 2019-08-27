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
	class_addProtocol([UIPress class], @protocol(UIPressInstanceExports));
	class_addProtocol([UIPress class], @protocol(UIPressClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPressPhaseBegan"] = @0;
	context[@"UIPressPhaseChanged"] = @1;
	context[@"UIPressPhaseStationary"] = @2;
	context[@"UIPressPhaseEnded"] = @3;
	context[@"UIPressPhaseCancelled"] = @4;

	context[@"UIPressTypeUpArrow"] = @0;
	context[@"UIPressTypeDownArrow"] = @1;
	context[@"UIPressTypeLeftArrow"] = @2;
	context[@"UIPressTypeRightArrow"] = @3;
	context[@"UIPressTypeSelect"] = @4;
	context[@"UIPressTypeMenu"] = @5;
	context[@"UIPressTypePlayPause"] = @6;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIPress_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
