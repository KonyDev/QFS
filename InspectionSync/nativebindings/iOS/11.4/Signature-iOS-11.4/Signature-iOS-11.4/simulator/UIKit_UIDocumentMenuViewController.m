#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDocumentMenuViewController (Exports)
-(id) jsinitWithDocumentTypes: (NSArray *) allowedUTIs inMode: (UIDocumentPickerMode) mode 
{
	id resultVal__;
	resultVal__ = [[self initWithDocumentTypes: allowedUTIs inMode: mode ] autorelease];
	return resultVal__;
}
-(void) jsaddOptionWithTitle: (NSString *) title image: (UIImage *) image order: (UIDocumentMenuOrder) order handler: (JSValue *) handler 
{
	void (^ handler_)(void) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void() {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	[self addOptionWithTitle: title image: image order: order handler: handler_ ];
}
-(id) jsinitWithURL: (NSURL *) url inMode: (UIDocumentPickerMode) mode 
{
	id resultVal__;
	resultVal__ = [[self initWithURL: url inMode: mode ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDocumentMenuViewController class], @protocol(UIDocumentMenuViewControllerInstanceExports));
	class_addProtocol([UIDocumentMenuViewController class], @protocol(UIDocumentMenuViewControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIDocumentMenuOrderFirst"] = @0UL;
	context[@"UIDocumentMenuOrderLast"] = @1UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIDocumentMenuViewControllerProtocols()
{
	(void)@protocol(UIDocumentMenuDelegate);
}
void load_UIKit_UIDocumentMenuViewController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
