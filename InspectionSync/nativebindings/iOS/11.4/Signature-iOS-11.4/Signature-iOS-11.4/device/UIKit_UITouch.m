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
	class_addProtocol([UITouch class], @protocol(UITouchInstanceExports));
	class_addProtocol([UITouch class], @protocol(UITouchClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UITouchPhaseBegan"] = @0;
	context[@"UITouchPhaseMoved"] = @1;
	context[@"UITouchPhaseStationary"] = @2;
	context[@"UITouchPhaseEnded"] = @3;
	context[@"UITouchPhaseCancelled"] = @4;

	context[@"UIForceTouchCapabilityUnknown"] = @0;
	context[@"UIForceTouchCapabilityUnavailable"] = @1;
	context[@"UIForceTouchCapabilityAvailable"] = @2;

	context[@"UITouchTypeDirect"] = @0;
	context[@"UITouchTypeIndirect"] = @1;
	context[@"UITouchTypeStylus"] = @2;

	context[@"UITouchPropertyForce"] = @1;
	context[@"UITouchPropertyAzimuth"] = @2;
	context[@"UITouchPropertyAltitude"] = @4;
	context[@"UITouchPropertyLocation"] = @8;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UITouch_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
