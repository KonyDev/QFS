#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UITextInputMode (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation UITextInputStringTokenizer (Exports)
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
-(id) jsinitWithTextInput: (UIResponder *) textInput 
{
	id resultVal__;
	resultVal__ = [[self initWithTextInput: textInput ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UITextSelectionRect class], @protocol(UITextSelectionRectInstanceExports));
	class_addProtocol([UITextSelectionRect class], @protocol(UITextSelectionRectClassExports));
	class_addProtocol([UITextInputMode class], @protocol(UITextInputModeInstanceExports));
	class_addProtocol([UITextInputMode class], @protocol(UITextInputModeClassExports));
	class_addProtocol([UITextInputStringTokenizer class], @protocol(UITextInputStringTokenizerInstanceExports));
	class_addProtocol([UITextInputStringTokenizer class], @protocol(UITextInputStringTokenizerClassExports));
	class_addProtocol([UITextRange class], @protocol(UITextRangeInstanceExports));
	class_addProtocol([UITextRange class], @protocol(UITextRangeClassExports));
	class_addProtocol([UITextPosition class], @protocol(UITextPositionInstanceExports));
	class_addProtocol([UITextPosition class], @protocol(UITextPositionClassExports));
	class_addProtocol([UITextInputAssistantItem class], @protocol(UITextInputAssistantItemInstanceExports));
	class_addProtocol([UITextInputAssistantItem class], @protocol(UITextInputAssistantItemClassExports));
	class_addProtocol([UIDictationPhrase class], @protocol(UIDictationPhraseInstanceExports));
	class_addProtocol([UIDictationPhrase class], @protocol(UIDictationPhraseClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UITextStorageDirectionForward"] = @0;
	context[@"UITextStorageDirectionBackward"] = @1;

	context[@"UITextLayoutDirectionRight"] = @2;
	context[@"UITextLayoutDirectionLeft"] = @3;
	context[@"UITextLayoutDirectionUp"] = @4;
	context[@"UITextLayoutDirectionDown"] = @5;

	context[@"UITextWritingDirectionNatural"] = @-1;
	context[@"UITextWritingDirectionLeftToRight"] = @0;
	context[@"UITextWritingDirectionRightToLeft"] = @1;

	context[@"UITextGranularityCharacter"] = @0;
	context[@"UITextGranularityWord"] = @1;
	context[@"UITextGranularitySentence"] = @2;
	context[@"UITextGranularityParagraph"] = @3;
	context[@"UITextGranularityLine"] = @4;
	context[@"UITextGranularityDocument"] = @5;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UITextInputTextFontKey;
	if (p != NULL) context[@"UITextInputTextFontKey"] = UITextInputTextFontKey;
	p = (void*) &UITextInputCurrentInputModeDidChangeNotification;
	if (p != NULL) context[@"UITextInputCurrentInputModeDidChangeNotification"] = UITextInputCurrentInputModeDidChangeNotification;
	p = (void*) &UITextInputTextColorKey;
	if (p != NULL) context[@"UITextInputTextColorKey"] = UITextInputTextColorKey;
	p = (void*) &UITextInputTextBackgroundColorKey;
	if (p != NULL) context[@"UITextInputTextBackgroundColorKey"] = UITextInputTextBackgroundColorKey;
}
void UIKit_UITextInputProtocols()
{
	(void)@protocol(UITextInputTokenizer);
	(void)@protocol(UITextInput);
	(void)@protocol(UITextInputDelegate);
	(void)@protocol(UIKeyInput);
}
void load_UIKit_UITextInput_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
