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
	context[@"kCGErrorSuccess"] = @0;
	context[@"kCGErrorFailure"] = @1000;
	context[@"kCGErrorIllegalArgument"] = @1001;
	context[@"kCGErrorInvalidConnection"] = @1002;
	context[@"kCGErrorInvalidContext"] = @1003;
	context[@"kCGErrorCannotComplete"] = @1004;
	context[@"kCGErrorNotImplemented"] = @1006;
	context[@"kCGErrorRangeCheck"] = @1007;
	context[@"kCGErrorTypeCheck"] = @1008;
	context[@"kCGErrorInvalidOperation"] = @1010;
	context[@"kCGErrorNoneAvailable"] = @1011;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGError_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
