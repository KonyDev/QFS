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
	context[@"CGPDFObjectGetType"] = ^CGPDFObjectType(id arg0) {
		return CGPDFObjectGetType(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGPDFObjectTypeNull"] = @1;
	context[@"kCGPDFObjectTypeBoolean"] = @2;
	context[@"kCGPDFObjectTypeInteger"] = @3;
	context[@"kCGPDFObjectTypeReal"] = @4;
	context[@"kCGPDFObjectTypeName"] = @5;
	context[@"kCGPDFObjectTypeString"] = @6;
	context[@"kCGPDFObjectTypeArray"] = @7;
	context[@"kCGPDFObjectTypeDictionary"] = @8;
	context[@"kCGPDFObjectTypeStream"] = @9;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPDFObject_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
