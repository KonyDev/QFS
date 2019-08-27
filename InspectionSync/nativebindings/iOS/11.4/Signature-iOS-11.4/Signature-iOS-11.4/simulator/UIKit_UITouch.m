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
	context[@"UITouchPhaseBegan"] = @0L;
	context[@"UITouchPhaseMoved"] = @1L;
	context[@"UITouchPhaseStationary"] = @2L;
	context[@"UITouchPhaseEnded"] = @3L;
	context[@"UITouchPhaseCancelled"] = @4L;

	context[@"UIForceTouchCapabilityUnknown"] = @0L;
	context[@"UIForceTouchCapabilityUnavailable"] = @1L;
	context[@"UIForceTouchCapabilityAvailable"] = @2L;

	context[@"UITouchTypeDirect"] = @0L;
	context[@"UITouchTypeIndirect"] = @1L;
	context[@"UITouchTypeStylus"] = @2L;

	context[@"UITouchPropertyForce"] = @1L;
	context[@"UITouchPropertyAzimuth"] = @2L;
	context[@"UITouchPropertyAltitude"] = @4L;
	context[@"UITouchPropertyLocation"] = @8L;

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
