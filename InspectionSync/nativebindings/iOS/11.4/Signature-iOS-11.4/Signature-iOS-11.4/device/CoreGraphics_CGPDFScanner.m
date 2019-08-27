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
	context[@"CGPDFScannerRelease"] = ^void(id arg0) {
		CGPDFScannerRelease(arg0);
	};
	context[@"CGPDFScannerRetain"] = ^id(id arg0) {
		return CGPDFScannerRetain(arg0);
	};
	context[@"CGPDFScannerScan"] = ^_Bool(id arg0) {
		return CGPDFScannerScan(arg0);
	};
	context[@"CGPDFScannerGetContentStream"] = ^id(id arg0) {
		return CGPDFScannerGetContentStream(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPDFScanner_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
