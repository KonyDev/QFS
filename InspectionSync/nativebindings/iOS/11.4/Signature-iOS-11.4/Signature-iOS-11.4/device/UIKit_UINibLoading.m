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
	class_addProtocol([NSBundle class], @protocol(NSBundleUINibLoadingAdditionsCategoryInstanceExports));
	class_addProtocol([NSBundle class], @protocol(NSBundleUINibLoadingAdditionsCategoryClassExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUINibLoadingAdditionsCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUINibLoadingAdditionsCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UINibProxiedObjectsKey;
	if (p != NULL) context[@"UINibProxiedObjectsKey"] = UINibProxiedObjectsKey;
	p = (void*) &UINibExternalObjects;
	if (p != NULL) context[@"UINibExternalObjects"] = UINibExternalObjects;
}
void load_UIKit_UINibLoading_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
