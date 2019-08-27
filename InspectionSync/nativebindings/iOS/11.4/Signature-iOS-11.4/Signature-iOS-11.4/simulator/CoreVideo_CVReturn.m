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
	context[@"kCVReturnSuccess"] = @0;
	context[@"kCVReturnFirst"] = @-6660;
	context[@"kCVReturnError"] = @-6660;
	context[@"kCVReturnInvalidArgument"] = @-6661;
	context[@"kCVReturnAllocationFailed"] = @-6662;
	context[@"kCVReturnUnsupported"] = @-6663;
	context[@"kCVReturnInvalidDisplay"] = @-6670;
	context[@"kCVReturnDisplayLinkAlreadyRunning"] = @-6671;
	context[@"kCVReturnDisplayLinkNotRunning"] = @-6672;
	context[@"kCVReturnDisplayLinkCallbacksNotSet"] = @-6673;
	context[@"kCVReturnInvalidPixelFormat"] = @-6680;
	context[@"kCVReturnInvalidSize"] = @-6681;
	context[@"kCVReturnInvalidPixelBufferAttributes"] = @-6682;
	context[@"kCVReturnPixelBufferNotOpenGLCompatible"] = @-6683;
	context[@"kCVReturnPixelBufferNotMetalCompatible"] = @-6684;
	context[@"kCVReturnWouldExceedAllocationThreshold"] = @-6689;
	context[@"kCVReturnPoolAllocationFailed"] = @-6690;
	context[@"kCVReturnInvalidPoolAttributes"] = @-6691;
	context[@"kCVReturnRetry"] = @-6692;
	context[@"kCVReturnLast"] = @-6699;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreVideo_CVReturn_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
