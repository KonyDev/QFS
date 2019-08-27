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
	context[@"CFPlugInInstanceGetFactoryName"] = ^id(id arg0) {
		return CFPlugInInstanceGetFactoryName(arg0);
	};
	context[@"CFPlugInSetLoadOnDemand"] = ^void(id arg0, Boolean arg1) {
		CFPlugInSetLoadOnDemand(arg0, arg1);
	};
	context[@"CFPlugInUnregisterFactory"] = ^Boolean(id arg0) {
		return CFPlugInUnregisterFactory(arg0);
	};
	context[@"CFPlugInCreate"] = ^id(id arg0, id arg1) {
		return CFPlugInCreate(arg0, arg1);
	};
	context[@"CFPlugInFindFactoriesForPlugInType"] = ^id(id arg0) {
		return CFPlugInFindFactoriesForPlugInType(arg0);
	};
	context[@"CFPlugInRegisterFactoryFunctionByName"] = ^Boolean(id arg0, id arg1, id arg2) {
		return CFPlugInRegisterFactoryFunctionByName(arg0, arg1, arg2);
	};
	context[@"CFPlugInGetBundle"] = ^id(id arg0) {
		return CFPlugInGetBundle(arg0);
	};
	context[@"CFPlugInFindFactoriesForPlugInTypeInPlugIn"] = ^id(id arg0, id arg1) {
		return CFPlugInFindFactoriesForPlugInTypeInPlugIn(arg0, arg1);
	};
	context[@"CFPlugInGetTypeID"] = ^CFTypeID() {
		return CFPlugInGetTypeID();
	};
	context[@"CFPlugInAddInstanceForFactory"] = ^void(id arg0) {
		CFPlugInAddInstanceForFactory(arg0);
	};
	context[@"CFPlugInIsLoadOnDemand"] = ^Boolean(id arg0) {
		return CFPlugInIsLoadOnDemand(arg0);
	};
	context[@"CFPlugInRegisterPlugInType"] = ^Boolean(id arg0, id arg1) {
		return CFPlugInRegisterPlugInType(arg0, arg1);
	};
	context[@"CFPlugInInstanceGetTypeID"] = ^CFTypeID() {
		return CFPlugInInstanceGetTypeID();
	};
	context[@"CFPlugInRemoveInstanceForFactory"] = ^void(id arg0) {
		CFPlugInRemoveInstanceForFactory(arg0);
	};
	context[@"CFPlugInUnregisterPlugInType"] = ^Boolean(id arg0, id arg1) {
		return CFPlugInUnregisterPlugInType(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCFPlugInUnloadFunctionKey;
	if (p != NULL) context[@"kCFPlugInUnloadFunctionKey"] = [JSValue valueWithObject: (__bridge id) kCFPlugInUnloadFunctionKey inContext: context];
	p = (void*) &kCFPlugInFactoriesKey;
	if (p != NULL) context[@"kCFPlugInFactoriesKey"] = [JSValue valueWithObject: (__bridge id) kCFPlugInFactoriesKey inContext: context];
	p = (void*) &kCFPlugInTypesKey;
	if (p != NULL) context[@"kCFPlugInTypesKey"] = [JSValue valueWithObject: (__bridge id) kCFPlugInTypesKey inContext: context];
	p = (void*) &kCFPlugInDynamicRegistrationKey;
	if (p != NULL) context[@"kCFPlugInDynamicRegistrationKey"] = [JSValue valueWithObject: (__bridge id) kCFPlugInDynamicRegistrationKey inContext: context];
	p = (void*) &kCFPlugInDynamicRegisterFunctionKey;
	if (p != NULL) context[@"kCFPlugInDynamicRegisterFunctionKey"] = [JSValue valueWithObject: (__bridge id) kCFPlugInDynamicRegisterFunctionKey inContext: context];
}
void load_CoreFoundation_CFPlugIn_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
