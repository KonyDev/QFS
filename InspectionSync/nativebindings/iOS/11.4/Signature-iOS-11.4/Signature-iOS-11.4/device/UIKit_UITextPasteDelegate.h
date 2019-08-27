#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextPasteDelegate_symbols(JSContext*);
@protocol UITextPasteItemInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) id localObject;
@property (readonly,nonatomic) NSDictionary * defaultAttributes;
@property (readonly,nonatomic) __kindof NSItemProvider * itemProvider;
-(void) setStringResult: (NSString *) string ;
-(void) setDefaultResult;
-(void) setAttachmentResult: (NSTextAttachment *) textAttachment ;
-(void) setNoResult;
-(void) setAttributedStringResult: (NSAttributedString *) string ;
@end
@protocol UITextPasteItemClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITextPasteDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSAttributedString *) textPasteConfigurationSupporting: (id) textPasteConfigurationSupporting combineItemAttributedStrings: (NSArray *) itemStrings forRange: (UITextRange *) textRange ;
-(UITextRange *) textPasteConfigurationSupporting: (id) textPasteConfigurationSupporting performPasteOfAttributedString: (NSAttributedString *) attributedString toRange: (UITextRange *) textRange ;
-(BOOL) textPasteConfigurationSupporting: (id) textPasteConfigurationSupporting shouldAnimatePasteOfAttributedString: (NSAttributedString *) attributedString toRange: (UITextRange *) textRange ;
-(void) textPasteConfigurationSupporting: (id) textPasteConfigurationSupporting transformPasteItem: (id) item ;
@end
@protocol UITextPasteDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop