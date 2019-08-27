#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSTextAttachment_symbols(JSContext*);
@protocol NSAttributedStringNSAttributedStringAttachmentConveniencesCategoryInstanceExports<JSExport>
@end
@protocol NSAttributedStringNSAttributedStringAttachmentConveniencesCategoryClassExports<JSExport>
+(NSAttributedString *) attributedStringWithAttachment: (NSTextAttachment *) attachment ;
@end
@protocol NSTextAttachmentInstanceExports<JSExport, NSTextAttachmentContainerInstanceExports_, NSCodingInstanceExports_>
@property (nonatomic,strong) NSFileWrapper * fileWrapper;
@property (copy,nonatomic) NSString * fileType;
@property (nonatomic,strong) UIImage * image;
@property (copy,nonatomic) NSData * contents;
@property (nonatomic) CGRect bounds;
JSExportAs(initWithDataOfType,
-(id) jsinitWithData: (NSData *) contentData ofType: (NSString *) uti );
@end
@protocol NSTextAttachmentClassExports<JSExport, NSTextAttachmentContainerClassExports_, NSCodingClassExports_>
@end
@protocol NSTextAttachmentContainerInstanceExports_<JSExport, NSObjectInstanceExports_>
-(CGRect) attachmentBoundsForTextContainer: (NSTextContainer *) textContainer proposedLineFragment: (CGRect) lineFrag glyphPosition: (CGPoint) position characterIndex: (NSUInteger) charIndex ;
-(UIImage *) imageForBounds: (CGRect) imageBounds textContainer: (NSTextContainer *) textContainer characterIndex: (NSUInteger) charIndex ;
@end
@protocol NSTextAttachmentContainerClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop