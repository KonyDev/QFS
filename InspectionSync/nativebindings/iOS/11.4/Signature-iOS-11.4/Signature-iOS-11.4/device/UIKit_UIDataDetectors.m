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
	context[@"UIDataDetectorTypePhoneNumber"] = @1U;
	context[@"UIDataDetectorTypeLink"] = @2U;
	context[@"UIDataDetectorTypeAddress"] = @4U;
	context[@"UIDataDetectorTypeCalendarEvent"] = @8U;
	context[@"UIDataDetectorTypeShipmentTrackingNumber"] = @16U;
	context[@"UIDataDetectorTypeFlightNumber"] = @32U;
	context[@"UIDataDetectorTypeLookupSuggestion"] = @64U;
	context[@"UIDataDetectorTypeNone"] = @0U;
	context[@"UIDataDetectorTypeAll"] = @-1U;

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
