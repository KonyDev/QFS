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
	context[@"CGPDFStreamGetDictionary"] = ^id(id arg0) {
		return CGPDFStreamGetDictionary(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"CGPDFDataFormatRaw"] = @0;
	context[@"CGPDFDataFormatJPEGEncoded"] = @1;
	context[@"CGPDFDataFormatJPEG2000"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPDFStream_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
