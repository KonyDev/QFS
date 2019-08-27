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
	context[@"UIDataDetectorTypePhoneNumber"] = @1UL;
	context[@"UIDataDetectorTypeLink"] = @2UL;
	context[@"UIDataDetectorTypeAddress"] = @4UL;
	context[@"UIDataDetectorTypeCalendarEvent"] = @8UL;
	context[@"UIDataDetectorTypeShipmentTrackingNumber"] = @16UL;
	context[@"UIDataDetectorTypeFlightNumber"] = @32UL;
	context[@"UIDataDetectorTypeLookupSuggestion"] = @64UL;
	context[@"UIDataDetectorTypeNone"] = @0UL;
	context[@"UIDataDetectorTypeAll"] = @-1UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIDataDetectors_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
