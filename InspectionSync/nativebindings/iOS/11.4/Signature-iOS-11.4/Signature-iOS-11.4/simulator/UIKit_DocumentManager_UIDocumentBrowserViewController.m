#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDocumentBrowserViewController (Exports)
-(id) jsinitForOpeningFilesWithContentTypes: (NSArray *) allowedContentTypes 
{
	id resultVal__;
	resultVal__ = [[self initForOpeningFilesWithContentTypes: allowedContentTypes ] autorelease];
	return resultVal__;
}
-(void) jsimportDocumentAtURL: (NSURL *) documentURL nextToDocumentAtURL: (NSURL *) neighbourURL mode: (UIDocumentBrowserImportMode) importMode completionHandler: (JSValue *) completion 
{
	void (^ completion_)(NSURL * , NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(NSURL * arg0, NSError * arg1) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self importDocumentAtURL: documentURL nextToDocumentAtURL: neighbourURL mode: importMode completionHandler: completion_ ];
}
-(void) jsrevealDocumentAtURL: (NSURL *) url importIfNeeded: (BOOL) importIfNeeded completion: (JSValue *) completion 
{
	void (^ completion_)(NSURL * , NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(NSURL * arg0, NSError * arg1) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self revealDocumentAtURL: url importIfNeeded: importIfNeeded completion: completion_ ];
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation UIDocumentBrowserTransitionController (Exports)
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object ];
	return resultVal__;
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UIDocumentBrowserViewController class], @protocol(UIDocumentBrowserViewControllerInstanceExports));
	class_addProtocol([UIDocumentBrowserViewController class], @protocol(UIDocumentBrowserViewControllerClassExports));
	class_addProtocol([UIDocumentBrowserTransitionController class], @protocol(UIDocumentBrowserTransitionControllerInstanceExports));
	class_addProtocol([UIDocumentBrowserTransitionController class], @protocol(UIDocumentBrowserTransitionControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIDocumentBrowserErrorGeneric"] = @1L;

	context[@"UIDocumentBrowserImportModeNone"] = @0UL;
	context[@"UIDocumentBrowserImportModeCopy"] = @1UL;
	context[@"UIDocumentBrowserImportModeMove"] = @2UL;

	context[@"UIDocumentBrowserUserInterfaceStyleWhite"] = @0UL;
	context[@"UIDocumentBrowserUserInterfaceStyleLight"] = @1UL;
	context[@"UIDocumentBrowserUserInterfaceStyleDark"] = @2UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIDocumentBrowserErrorDomain;
	if (p != NULL) context[@"UIDocumentBrowserErrorDomain"] = UIDocumentBrowserErrorDomain;
}
void UIKit_DocumentManager_UIDocumentBrowserViewControllerProtocols()
{
	(void)@protocol(UIDocumentBrowserViewControllerDelegate);
}
void load_UIKit_DocumentManager_UIDocumentBrowserViewController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
