#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UISimpleTextPrintFormatter (Exports)
-(id) jsinitWithText: (NSString *) text 
{
	id resultVal__;
	resultVal__ = [[self initWithText: text ] autorelease];
	return resultVal__;
}
-(id) jsinitWithAttributedText: (NSAttributedString *) attributedText 
{
	id resultVal__;
	resultVal__ = [[self initWithAttributedText: attributedText ] autorelease];
	return resultVal__;
}
@end
@implementation UIMarkupTextPrintFormatter (Exports)
-(id) jsinitWithMarkupText: (NSString *) markupText 
{
	id resultVal__;
	resultVal__ = [[self initWithMarkupText: markupText ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIViewPrintFormatter class], @protocol(UIViewPrintFormatterInstanceExports));
	class_addProtocol([UIViewPrintFormatter class], @protocol(UIViewPrintFormatterClassExports));
	class_addProtocol([UISimpleTextPrintFormatter class], @protocol(UISimpleTextPrintFormatterInstanceExports));
	class_addProtocol([UISimpleTextPrintFormatter class], @protocol(UISimpleTextPrintFormatterClassExports));
	class_addProtocol([UIPrintFormatter class], @protocol(UIPrintFormatterInstanceExports));
	class_addProtocol([UIPrintFormatter class], @protocol(UIPrintFormatterClassExports));
	class_addProtocol([UIMarkupTextPrintFormatter class], @protocol(UIMarkupTextPrintFormatterInstanceExports));
	class_addProtocol([UIMarkupTextPrintFormatter class], @protocol(UIMarkupTextPrintFormatterClassExports));
	class_addProtocol([UIView class], @protocol(UIViewUIPrintFormatterCategoryInstanceExports));
	class_addProtocol([UIView class], @protocol(UIViewUIPrintFormatterCategoryClassExports));
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
void load_UIKit_UIPrintFormatter_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
