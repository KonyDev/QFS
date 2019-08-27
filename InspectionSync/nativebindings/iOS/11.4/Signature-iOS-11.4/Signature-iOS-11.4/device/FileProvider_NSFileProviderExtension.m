#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation NSFileProviderExtension (Exports)
-(void) jsprovidePlaceholderAtURL: (NSURL *) url completionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSError * arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self providePlaceholderAtURL: url completionHandler: completionHandler_ ];
}
-(void) jsstartProvidingItemAtURL: (NSURL *) url completionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSError * arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self startProvidingItemAtURL: url completionHandler: completionHandler_ ];
}
-(NSFileProviderItem) jsitemForIdentifier: (NSFileProviderItemIdentifier) identifier error: (JSValue *) error 
{
	NSError* error_ = nil;
	NSFileProviderItem resultVal__;
	resultVal__ = [self itemForIdentifier: identifier error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
@implementation NSFileProviderExtension (NSFileProviderExtensionDeprecatedCategoryExports)
+(BOOL) jswritePlaceholderAtURL: (NSURL *) placeholderURL withMetadata: (NSDictionary *) metadata error: (JSValue *) error 
{
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writePlaceholderAtURL: placeholderURL withMetadata: metadata error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([NSFileProviderExtension class], @protocol(NSFileProviderExtensionInstanceExports));
	class_addProtocol([NSFileProviderExtension class], @protocol(NSFileProviderExtensionClassExports));
	class_addProtocol([NSFileProviderExtension class], @protocol(NSFileProviderExtensionDeprecatedCategoryInstanceExports));
	class_addProtocol([NSFileProviderExtension class], @protocol(NSFileProviderExtensionDeprecatedCategoryClassExports));
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
}
void load_FileProvider_NSFileProviderExtension_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
