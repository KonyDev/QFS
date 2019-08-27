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
	context[@"CGPDFContentStreamRetain"] = ^id(id arg0) {
		return CGPDFContentStreamRetain(arg0);
	};
	context[@"CGPDFContentStreamCreateWithPage"] = ^id(id arg0) {
		return CGPDFContentStreamCreateWithPage(arg0);
	};
	context[@"CGPDFContentStreamGetStreams"] = ^id(id arg0) {
		return CGPDFContentStreamGetStreams(arg0);
	};
	context[@"CGPDFContentStreamRelease"] = ^void(id arg0) {
		CGPDFContentStreamRelease(arg0);
	};
	context[@"CGPDFContentStreamCreateWithStream"] = ^id(id arg0, id arg1, id arg2) {
		return CGPDFContentStreamCreateWithStream(arg0, arg1, arg2);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPDFContentStream_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
